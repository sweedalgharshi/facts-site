'use script';

// DATA
const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source: 'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

// SELECTING Dom Elements
const btnOpen = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Create DOM elements: Render facts in list
factsList.innerHTML = '';

// Load data from Supabase
async function loadFacts() {
  const res = await fetch('https://qwbkpqureyjrmcmwnfdq.supabase.co/rest/v1/facts', {
    headers: {
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3YmtwcXVyZXlqcm1jbXduZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTE2NDYsImV4cCI6MTk4Njc2NzY0Nn0.bB_fCfsilW5JdUsjolbzhTw3gWPG9Vk7u0Eh-fcjgZs',
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3YmtwcXVyZXlqcm1jbXduZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTE2NDYsImV4cCI6MTk4Njc2NzY0Nn0.bB_fCfsilW5JdUsjolbzhTw3gWPG9Vk7u0Eh-fcjgZs',
    },
  });

  const data = await res.json();
  console.log(data);

  createFactList(data);
}
loadFacts();

const createFactList = function (dataArray) {
  const htmlArray = dataArray.map((fact) => {
    return ` 
    <li class="fact">
      <p>
        ${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }">${fact.category}</span>
      <div class="vote-btn">
        <button>👍 ${fact.votesInteresting}</button>
        <button>🤯 ${fact.votesMindblowing}</button>
        <button>⛔️ ${fact.votesFalse}</button>
      </div>
    </li>`;
  });

  const html = htmlArray.join('');

  factsList.insertAdjacentHTML('afterbegin', html);
};

// createFactList(initialFacts);

// Displaying And Hiding the Form
btnOpen.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btnOpen.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btnOpen.textContent = 'Share a fact';
  }
});

// ///////////

/*

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source: 'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const calcAge = (year) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
};

const factAge = initialFacts.map((el) => calcAge(el.createdIn));
console.log(factAge.join(' & '));



*/
