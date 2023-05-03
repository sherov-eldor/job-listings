const vacancies = [
  {
    company_image: "./images/photosnap.png",
    company_name: "Photosnap",
    featured: true,
    staff_requirement: "Senior Frontend Developer",
    created_date: "2023-02-15",
    job_type: "Full Time",
    job_location: "USA only",
    job_requirements: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    company_image: "./images/manage.png",
    company_name: "Manage",
    featured: true,
    staff_requirement: "Fullstack Developer",
    created_date: "2023-02-15",
    job_type: "Part Time",
    job_location: "Remote",
    job_requirements: ["Fullstack", "Midweight", "Python", "React"],
  },
  {
    company_image: "./images/account.png",
    company_name: "Account",
    featured: false,
    staff_requirement: "Junior Frontend Developer",
    created_date: "2023-02-15",
    job_type: "Part Time",
    job_location: "USA only",
    job_requirements: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
  },
  {
    company_image: "../images/my-home.png",
    company_name: "MyHome",
    featured: false,
    staff_requirement: "Junior Frontend Developer",
    created_date: "2023-02-15",
    job_type: "Contract",
    job_location: "USA only",
    job_requirements: ["Frontend", "Junior", "CSS", "JavaScript"],
  },
  {
    company_image: "../images/facelt.png",
    company_name: "FaceIt",
    featured: false,
    staff_requirement: "Junior Backend Developer",
    created_date: "2023-02-15",
    job_type: "Full Time",
    job_location: "UK only",
    job_requirements: ["Backend", "Junior", "RoR", "Ruby"],
  },
  {
    company_image: "../images/loop-studios.png",
    company_name: "Loop Studios",
    featured: false,
    staff_requirement: "Software Engineer",
    created_date: "2023-02-15",
    job_type: "Full Time",
    job_location: "Worldwide",
    job_requirements: [
      "Frontend",
      "Midweight",
      "CSS",
      "JavaScript",
      "Sass",
      "Ruby",
    ],
  },
  {
    company_image: "../images/shortly.png",
    company_name: "Shortly",
    featured: false,
    staff_requirement: "Junior Developer",
    created_date: "2023-02-15",
    job_type: "Full Time",
    job_location: "Worldwide",
    job_requirements: ["Frontend", "Junior", "CSS", "JavaScript", "Sass"],
  },
  {
    company_image: "../images/insure.png",
    company_name: "Insure",
    featured: false,
    staff_requirement: "Junior Frontend Developer",
    created_date: "2023-02-15",
    job_type: "Full Time",
    job_location: "USA only",
    job_requirements: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
  },
  {
    company_image: "../images/eyecam.png",
    company_name: "Eyecam Co.",
    featured: false,
    staff_requirement: "Full Stack Engineer",
    created_date: "2023-02-15",
    job_type: "Full Time",
    job_location: "Worldwide",
    job_requirements: [
      "Fullstack",
      "Midweight",
      "Django",
      "JavaScript",
      "Python",
    ],
  },
  {
    company_image: "../images/air-filter.png",
    company_name: "The Air Filter Company",
    featured: false,
    staff_requirement: "Front-end Dev",
    created_date: "2023-02-15",
    job_type: "Part Time",
    job_location: "Worldwide",
    job_requirements: ["Frontend", "Junior", "React", "JavaScript", "Sass"],
  },
];

document.addEventListener("DOMContentLoaded", (event) => {
  const elVacansyList = document.querySelector(".vacansy-list");

  vacancies.forEach((vacancy) => {
    elVacansyList.innerHTML += `<li class="vacansy-item">
    <div class="vacansy-item-inner">
      <div class="vacansy-item-left">
        <div class="comapny-img-wrapper">
          <img class="comapny-img" src="${
            vacancy.company_image
          }" alt="company-img" width="88" height="88"/>
        </div>
        <div class="company-info">
          <div class="company-info-top">
            <span class="company-name">${vacancy.company_name}</span>
            <span class="company-set-new">NEW!</span>
            ${
              vacancy.featured
                ? '<span class="company-feature">FEATURED</span>'
                : ""
            }
          </div>
          <a href="#" class="company-staff-required">
          ${vacancy.staff_requirement}
          </a>
          <div class="company-info-bottom">
            <span class="company-placed-period">
                1d ago
            </span>
            <div class="company-circle"></div>
            <span class="company-job-type">${vacancy.job_type}</span>
            <div class="company-circle"></div>
            <span class="company-job-location">${vacancy.job_location}</span>
          </div>
        </div>
      </div>
      <div class="vacansy-item-right">
        <ul class="company-job-requirements">
            <li class="company-job-requirement">${vacancy.job_requirements}</li>
        </ul>
      </div>
    </div>
  </li>`;
  });
});
