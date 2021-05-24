// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(chooseLicenseBox) {
//GNU Badge
  if (chooseLicenseBox === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  }

//MIT Badge
else if (chooseLicenseBox === 'MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
}

//Bitbucket Badge
else if (chooseLicenseBox === 'Bitbucket') {
  return `[![Bitbucket issues](https://img.shields.io/bitbucket/issues/lbesson/bin.svg)]`;
}

//IBM Badge
else if (chooseLicenseBox === 'IBM') {
  return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`;
}

//Boost Badge
else if (chooseLicenseBox === 'Boost') {
  return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`;
}

//Open Source Badge
else if (chooseLicenseBox === 'Open Source') {
  return `[![Open Source Love png1](https://badges.frapsoft.com/os/v1/open-source.png?v=103)]`;
}
else {
  return '';
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(chooseLicenseBox) {
//GNU Badge
  if (chooseLicenseBox === 'GNU') {
    return `[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }

//MIT Badge
  else if (chooseLicenseBox === 'MIT') {
    return `[![License: MIT](https://opensource.org/licenses/MIT)`;
  }

//BitBucket Badge
  else if (chooseLicenseBox === 'Bitbucket') {
    return `[![License: Bitbucket issues](https://Bitbucket.org/lbesson/bin/issues/)`;
  }

//IBM Badge
else if (chooseLicenseBox === 'IBM') {
  return `[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`;
}

//Boost Badge
else if (chooseLicenseBox === 'Boost') {
  return `[![License: Boost](https://www.boost.org/LICENSE_1_0.txt)`;
}

//Open Source Badge
else if (chooseLicenseBox === 'Open Source') {
  return `[![License:Open Source PNG](https://github.com/ellerbrock/open-source-badges/)`;
}
else {
  return '';
}  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titleName}

  # Table of Contents
  - [Installation](#installation)
  - [License](#license)
  ${data.projectName}
  # License
  ${renderLicenseLink(data.chooseLicenseBox)}
  # Badge
${renderLicenseBadge(data.chooseLicenseBox)}

`;
}

module.exports = generateMarkdown;
