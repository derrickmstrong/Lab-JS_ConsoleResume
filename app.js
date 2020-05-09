const resume = {
  name: 'Derrick Strong',
  career: 'Full-Stack Developer',
  description:
    'I am a fun-loving, people person whose background is in Marketing but pursuing a career change',
  interests: ['Eating', 'Sleeping', 'Coding'],
  positions: [
      {
      company: 'Zeekee',
      title: 'Dev',
      description: 'Built websites'
  },{
      company: 'UAB',
      title: 'Dev',
      description: 'Updated website'
  },{
      company: 'CLEAR',
      title: 'Consultant',
      description: 'Provided small businesses with excellent marketing services'
  }
],
skills: [{
    type: 'Drums',
    isCool: true
},{
    type: 'Trumpet',
    isCool: true
},{
    type: 'Communication',
    isCool: false
},{
    type: 'JavaScript',
    isCool: true
}]
};

console.log(`Name: ${resume.name.toUpperCase()}`);
console.log(`Career: ${resume.career}`);
console.log(`Description: ${resume.description} \n\n`);
console.log('My Interests:');

for (let i = 0; i < resume.interests.length; i++) {
  let results = resume.interests[i];
  console.log(`* ${results}`);
}
console.log(`\n`);
console.log('My Previous Experience:');
console.log(
  displayPosition(
    resume.positions[2].company,
    resume.positions[2].title,
    resume.positions[2].description
  )
);
console.log(
  displayPosition(
    resume.positions[1].company,
    resume.positions[1].title,
    resume.positions[1].description
  )
);
console.log(
  displayPosition(
    resume.positions[0].company,
    resume.positions[0].title,
    resume.positions[0].description
  )
);
console.log(`\n`);
console.log('My Skills:');

for (let i = 0; i < resume.skills.length; i++) {
    const type = resume.skills[i].type;
    const isCool = resume.skills[i].isCool;
    console.log(displaySkill(type, isCool));
}

// Functions
function displayPosition(company, title, description) {
    return `* ${title} at ${company} - ${description}.`
}
function displaySkill(skill, isCool) {
    return (isCool) ?  `* BAM: ${skill}` : `* ${skill}`
    }