/*
TODO: Add collapsible panels - I believe bootstrap supports this...
The page has a lot of information presented, I think it would be a nice touch
to be able to collapse some of the information... Future Project!
*/
/* Biographical Information*/
var bio = {
    "name": "Rebecca Owen",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "1 (803) 237-3334",
        "email": "rkowen@gmail.com",
        "github": "PajamaProgrammer",
        "twitter": "@PajamaProgramm1",
        "blog": "www.pajamaprogrammer.com",
        "location": "Newberry, South Carolina"
    },
    "welcomeMessage": "Hello World! I am a Computer Science Apprentice. My goal is to become a ninja. Seeking interesting work and project opportunities.",

    "colors": [ //Each skill below is assigned a color that will be used for the polar skill chart.
        "#FF6384",
        "#4BC0C0",
        "#FFCE56",
        "#E7E9ED",
        "#36A2EB",
        "#E56F19",
        "#9950AE",
        "#045600"
    ],

    "skills": [
        "Javascript",
        "HTML",
        "SQL",
        "Java",
        "Python",
        "C/C++",
        "Git",
        "CSS"
    ],

    "months": [ //represents the start date of each new skill
        new Date("2016 Jun 6"),
        new Date("2016 Jun 6"),
        new Date("2016 Apr 7"),
        new Date("2016 Jan 28"),
        new Date("2015 Nov 12"),
        new Date("2015 Nov 12"),
        new Date("2015 Oct 28"),
        new Date("2016 Jun 6")
    ],

    "biopic": "images/RKO_2016.jpg",
    "biopicAlt": "images/theNinja.jpg" //an added Easter Egg biopic
};

//var skills = [ "HTML", "CSS", "Javascript", "SQL", "Java","Git", "Python", "C/C++"];
//var dates = [new Date("2016 Jun 6"), new Date("2016 Jun 6"), new Date("2016 Jun 6"), new Date("2016 Apr 7"), new Date("2016 Jan 28"), new Date("2015 Oct 28"), new Date("2015 Nov 12"), new Date("2015 Nov 12")];

//Function will convert a Date object (list of Date Objects) into a list of elapsed time in months
function getMonths(date) {
    var months = [];
    for (var i = 0; i < date.length; i++) {
        var time = Date.now() - date[i].getTime();
        var s = time / 1000;
        var m = s / 60;
        var h = m / 60;
        var d = h / 24;
        var mo = d / 30;

        months.push(Math.round(mo));
    }

    return months;
}

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var names = bio.name.toUpperCase().split(" ");
    var formattedName = HTMLheaderNameFirst.replace("%data%", names[0]);
    formattedName = formattedName + HTMLheaderNameLast.replace("%data%", names[1]);
    $("#header").prepend(formattedName);

    $(".header-info:last").append(HTMLbioPicStart);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $(".biopic:last").append(formattedPic);
    var formattedPicAlt = HTMLbioPic.replace("%data%", bio.biopicAlt);
    $(".biopic:last").append(formattedPicAlt);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $(".header-info:last").append(formattedMsg);

    var formattedContacts = [];

    formattedContacts.push(HTMLmobile.replace(/%data%/g, bio.contacts.mobile));
    formattedContacts.push(HTMLemail.replace(/%data%/g, bio.contacts.email));
    formattedContacts.push(HTMLgithub.replace(/%data%/g, bio.contacts.github));
    formattedContacts.push(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
    formattedContacts.push(HTMLblog.replace(/%data%/g, bio.contacts.blog));
    formattedContacts.push(HTMLlocation.replace(/%data%/g, bio.contacts.location));

    for (var i = 0; i < formattedContacts.length; i++) {
        if (formattedContacts[i].length > 0) {
            $(".contact-list").append(formattedContacts[i]);
            $("#footerContacts").append(formattedContacts[i]);
        }
    }
};

bio.display();

/* Work Experience - I've held many positions and worked in many countries,
this object was modified to represent my work history. Which also meant modifying the
locationFinder funtion in helper.js in order properly display every location on the map...*/
var work = {
    "employers": [{
        "employer": "Schlumberger",
        "title": "Wireline Field Engineer",
        "location": "International",
        "dates": "Aug 2016 - Mar 2015",
        "description": "Supervised crew in the operation and ongoing maintenance of data acquisition equipment in a dynamic, fast paced, high volume, high expectation work setting. Provided mostly open-hole formation evaluation services - Resistivity, Nuclear (density/porosity), Imaging, Sonic, Nuclear Magnetic Resonance, Formation Pressure Testing & Sampling, Seismic, Coring, etc - and analysis of downhole conditions to aid clients on critical decisions regarding production or abandonment of well.",
        "url": "http://www.slb.com/",
        "jobs": [{ //Additional Details
            "position": "Wireline Open-Hole Instructor",
            "dates": "Nov 2014 – Mar 2015",
            "location": "Kellyville, Oklahoma",
            "bullets": [
                "Invitation to be instructor for the next generation of wireline field engineers. This was an on-loan assignment while waiting for my next assignment in Malabo, Equatorial Guinea – unfortunately the O&G downturn has severely impacted the African market."
            ]
        }, {
            "position": "General Field Engineer",
            "dates": "Nov 2012 – Nov 2014",
            "location": "Pemba, Mozambique",
            "bullets": [
                "Trusted with high-profile projects throughout the entire EAR (East Africa Remotes) with rig spread rates exceeding $250,000 per day",
                "Lead Project Engineer for Anadarko’s Land Campaign – successfully managed crew, equipment, and project with zero Non-Productive Time (NPT), safety, health, or environmental incidents.",
                "Consistently praised for technical and coaching on performance appraisals",
                "Actively worked towards implementing lean methodologies at the Pemba base – including a complete redesign of the shop floor layout to improve maintenance efficiency by eliminating waste and bottlenecks.",
                "Applied engineering skills to re-build broken auto-trim machine (device that performs electrical integrity checks) and programming skills to completely update/create the software and required tool-specific scripts. Successfully brought the machine online so it could be implemented as part of the improved lean workflow."
            ]
        }, {
            "position": "General Field Engineer",
            "dates": "Jun 2011 – Nov 2012",
            "location": "Roma, Australia",
            "bullets": [
                "In charge of the seismic cell – managed crew, maintenance of equipment, and continuous training. Wrote the standard operating procedure (SOP) and several easy to follow tutorials. All seismic related projects were performed with a high-rate of success and zero NPT."
            ]
        }, {
            "position": "Senior to General Field Engineer",
            "dates": "Jun 2010 – Jun 2011",
            "location": "Diyarbakir, Turkey",
            "bullets": [
                "Promoted to highest grade level for field personnel",
                "Wrote a technical training module for the TLD tool – the goal was to create a highly immersive learning module that would appeal to all types of learners (kinesthetic, visual, auditory, read-write). The module was still in use at Schlumberger’s training centers over three years later!",
                "Also assigned as lead engineer for projects in Romania and Morocco"
            ]
        }, {
            "position": "Senior Field Engineer",
            "dates": "Jan 2010 – Jun 2010",
            "location": "Malabo, Equatorial Guinea",
            "bullets": []
        }, {
            "position": "Senior Field Engineer",
            "dates": "Apr 2009 – Dec 2009",
            "location": "Fahud, Oman",
            "bullets": [
                "Main engineer for Daleel Petroleum – The client was unsatisfied with current pretest (formation pressure testing) methods. In response, I wrote the standard operating procedure (SOP) and implemented the ‘SMART’ pretest feature (and subsequent how-to manual) specifically for Daleel. Implementation of the ‘SMART’ pretest feature helped save the Schlumberger from losing this contract."
            ]
        }, {
            "position": "Junior to Senior Field Engineer",
            "dates": "Aug 2006 – Mar 2009",
            "location": "Ras Shukier, Egypt",
            "bullets": [
                "In the top 10% of my segment by attaining fixed-step promotion from junior field engineer to senior field engineer within two years",
                "Consistently performed as “exceeds expectation” on performance appraisals",
                "Conducted the first world-wide alpha-phase test of newly developed data acquisition software (Maxwell with MDT – Modular Formation Dynamics Tester)"
            ]
        }]
    }, {
        "employer": "Mississippi Power, a Southern Company",
        "title": "Cooperative Work Student",
        "location": "Gulfport, Mississippi",
        "dates": "Aug 2001 - May 2003",
        "description": "Worked as an Engineer in Training at Plant Jack Watson under the direct supervision of a senior engineer",
        "url": "http://www.mississippipower.com/",
        "jobs": [{ //Additional Details
            "position": "Cooperative Work Student",
            "dates": "Jan 2003 – May 2003",
            "location": "Gulfport, Mississippi",
            "bullets": [
                "Trusted with design and implementation of indicator lights to alert the operators of when the main turbine’s electrical output was synchronized to the electrical grid."
            ]
        }, {
            "position": "Cooperative Work Student",
            "dates": "May 2002 – Aug 2002",
            "location": "Gulfport, Mississippi",
            "bullets": [
                "Power Plant electrical drawing revisions using AutoCad.",
                "Contractor coordination and completion of assigned work orders."
            ]
        }, {
            "position": "Cooperative Work Student",
            "dates": "Aug 2001 – Dec 2001",
            "location": "Gulfport, Mississippi",
            "bullets": [
                "Coal fineness and loss on ignition analysis/testing."
            ]
        }]
    }]
};

work.display = function() {

    $("#workExperience").append(HTMLworkStart);

    for (var i = 0; i < work.employers.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[i].employer);
        formattedEmployer = formattedEmployer.replace("#", "EMP-" + i);
        formattedEmployer = formattedEmployer.replace("#", work.employers[i].url);
        $(".work-entry:last").append(formattedEmployer);

        var formattedDes = HTMLworkDescription.replace("%data%", work.employers[i].description);
        $(".work-entry:last").append(formattedDes);

        for (var j = 0; j < work.employers[i].jobs.length; j++) {
            var formattedTitle = HTMLworkTitle.replace("%data%", work.employers[i].jobs[j].position);
            formattedTitle = formattedTitle.replace("#", "#EMP-" + i);
            $(".work-entry:last").append(formattedTitle);

            //var formattedLocDate = HTMLworkLocation.replace("%data%", work.employers[i].jobs[j].location +" : "+ work.employers[i].jobs[j].dates);
            //$(".work-entry:last").append(formattedLocDate);

            var formattedLoc = HTMLworkLocation.replace("%data%", work.employers[i].jobs[j].location);
            $(".work-entry:last").append(formattedLoc);

            var formattedDate = HTMLworkDates.replace("%data%", work.employers[i].jobs[j].dates);
            $(".work-entry:last").append(formattedDate);

            $(".work-entry:last").append(HTMLworkBulletStart);
            for (var k = 0; k < work.employers[i].jobs[j].bullets.length; k++) {
                var formattedBullet = HTMLworkBullet.replace("%data%", work.employers[i].jobs[j].bullets[k]);
                $(".bullet-list:last").append(formattedBullet);
            }
        }
    }
};

work.display();

var education = {
    "schools": [{
        "name": "University of the People",
        "location": "Pasadena, California",
        "degree": "B.S.",
        "majors": ["Computer Science"],
        "minors": [],
        "dates": "Sep 2015 - Present",
        "url": "http://www.msstate.edu/",
        "gpa": "4.00/4.00"
    }, {
        "name": "Mississippi State University",
        "location": "Starkville, MS",
        "degree": "B.S.",
        "majors": ["Electrical Engineering"],
        "minors": ["Computer Science", "Mathematics"],
        "dates": "Jun 2000 - May 2006",
        "url": "http://www.uopeople.edu/",
        "gpa": "3.85/4.00"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "Jun 2016 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        formattedName = formattedName.replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedName);

        var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLoc);

        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDate);

        for (var l = 0; l < education.schools[i].majors.length; l++) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[l]);
            $(".education-entry:last").append(formattedMajor);
        }

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);

        for (var j = 0; j < education.schools[i].minors.length; j++) {
            var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minors[j]);
            $(".education-entry:last").append(formattedMinor);
        }

        var formattedGPA = HTMLschoolGPA.replace("%data%", education.schools[i].gpa);
        $(".education-entry:last").append(formattedGPA);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var k = 0; k < education.onlineCourses.length; k++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        formattedTitle = formattedTitle.replace("#", education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].date);
        $(".education-entry:last").append(formattedDates);
    }
};

education.display();

/*
TODO: Add description/images as projects are added
*/
var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "June 2016",
        "description": "My first project in Udacity's Front-End Web Development Nanodegree program." +
            "This web development portfolio is a continuous work-in-progress as I continue to learn, modify, and add projects!.",

        "images": ["images/img_gr/PortfolioImage-800_medium_1x.jpg"],
        "url": "http://pajamaprogrammer.github.io/FEND-Portfolio",
        "git": "https://github.com/PajamaProgrammer/FEND-Portfolio"
    }, {
        "title": "Resume",
        "dates": "June 2016",
        "description": "My second project in Udacity's Front-End Web Development Nanodegree program." +
            "This online resume dynamically creates page content from data retrieved from Javascript Objects (JSON);" +
            "allowing for quick and easy (and not so easy) edits and updates. This project also makes use of some" +
            "fun features - Google Maps, an interactive chart to display my skills, and a few easter eggs :)",

        "images": ["images/img_gr/ResumeImage-800_medium_1x.jpg"],
        "url": "http://pajamaprogrammer.github.io/FEND-Resume",
        "git": "https://github.com/PajamaProgrammer/FEND-Resume"
    }, {
        "title": "Sample Project 1",
        "dates": "2016",
        "description": "Just a Place Holder - Project Coming Soon!",
        "images": ["images/SpacePlaceHolder_Project1.jpg"],
        "url": "http://pajamaprogrammer.github.io",
        "git": "https://github.com/PajamaProgrammer"
    }, {
        "title": "Sample Project 2",
        "dates": "2016",
        "description": "Just a Place Holder - Project Coming Soon!",
        "images": ["images/SpacePlaceHolder_Project2.jpg"],
        "url": "http://pajamaprogrammer.github.io",
        "git": "https://github.com/PajamaProgrammer"
    }, {
        "title": "Sample Project 3",
        "dates": "2016",
        "description": "Just a Place Holder - Project Coming Soon!",
        "images": ["images/SpacePlaceHolder_Project3.jpg"],
        "url": "http://pajamaprogrammer.github.io",
        "git": "https://github.com/PajamaProgrammer"
    }, {
        "title": "Sample Project 4",
        "dates": "2016",
        "description": "Just a Place Holder - Project Coming Soon!",
        "images": ["images/SpacePlaceHolder_Project4.jpg"],
        "url": "http://pajamaprogrammer.github.io",
        "git": "https://github.com/PajamaProgrammer"
    }]
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (var i = 0; i < projects.projects.length; i++) {

        $(".project-entry:last").append(HTMLprojectCardStart);
        var formattedProjectCard = HTMPprojectCard.replace("%data%", projects.projects[i].images[0]);
        formattedProjectCard = formattedProjectCard.replace("%data%", i);
        formattedProjectCard = formattedProjectCard.replace("%data%", projects.projects[i].title);
        $(".card:last").append(formattedProjectCard);

        var formattedPopup = HTMLprojectPopupStart.replace(/%data%/g, i);
        $(".popup:last").append(formattedPopup);

        formattedPopup = HTMLprojectPopup.replace(/%data%/g, i);
        $(".modal:last").append(formattedPopup);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        formattedTitle = formattedTitle.replace("#", projects.projects[i].url);
        $(".modal-title:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".modal-title:last").append(formattedDate);

        var formattedPopupImage = HTMLprojectPopupImageLink.replace("%data%", projects.projects[i].url);
        formattedPopupImage = formattedPopupImage.replace("%data%", projects.projects[i].images[0]);
        formattedPopupImage = formattedPopupImage.replace("%data%", projects.projects[i].title);
        $(".modal-body:last").append(formattedPopupImage);
        $(".modal-body:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

        var formatedPopupFooter = HTMLProjectPopupFooter.replace("%data%", projects.projects[i].git);
        $(".modal-footer:last").append(formatedPopupFooter);
    }
};

projects.display();

/*
$(document).click(function(loc)
{
    logClicks(loc.pageX, loc.pageY);
}
);
*/
/*
$("#main").append(internationalizeButton);

function inName( oldname )
{
    var names = oldname.trim().split(" ");
    var first = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    var last = names[1].toUpperCase();

    return first + " " + last;
}
*/
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart - Used for displaying skills
var polarData = {
    datasets: [{
        data: getMonths(bio.months),
        backgroundColor: bio.colors,
        label: 'My dataset' // for legend
    }],
    labels: bio.skills
};


// Call functions
window.onload = function() {
    var ctx = document.getElementById("skills-chart").getContext("2d");
    window.myPolarArea = new Chart(ctx, {
        data: polarData,
        type: 'polarArea',
        options: {}
    });
};