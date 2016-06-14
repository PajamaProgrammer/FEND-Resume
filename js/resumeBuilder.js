var bio = {
    "name" : "Rebecca Owen",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "(803) 237-3334",
        "email" : "rkowen@gmail.com",
        "github" : "PajamaProgrammer",
        "twitter" : "@PajamaProgramm1",
        "blog"  : "www.pajamaprogrammer.com",
        "location" : "Newberry, South Carolina"
    },
    "welcomeMessage" : "Hello World!",
    "skills" : [
    "Python", "Java", "SQL", "HTML", "CSS", "Javascript", "C/C++"
    ],
    "picture" : "images/RKO_2016.jpg"
};

var work = {
    "jobs" : [
        {
            "position" : "General Field Engineer",
            "employer" : "Schlumberger",
            "dates" : "Aug 2006 - Mar 2015",
            "location" : "International",
            "description" : "Supervised crew in the operation and ongoing maintenance of data acquisition equipment in a dynamic, fast paced, high volume, high expectation work setting. Provided mostly open-hole formation evaluation services - Resistivity, Nuclear (density/porosity), Imaging, Sonic, Nuclear Magnetic Resonance, Formation Pressure Testing & Sampling, Seismic, Coring, etc - and analysis of downhole conditions to aid clients on critical decisions regarding production or abandonment of well."
        },
        {
            "position" : "Cooperative Work Student",
            "employer" : "Mississippi Power",
            "dates" : "Aug 2001 - May 2003",
            "location" : "Gulfport, Mississippi",
            "description" : "Worked as an Engineer in Training at Plant Jack Watson under the direct supervision of a senior engineer."
        }
    ]
};

var education = {
    "schools" : [
        {
            "name" : "University of the People",
            "location" : "Pasadena, California",
            "degree" : "BS",
            "major" : "Computer Science",
            "minor" : [],
            "graduation" : "May 2006",
            "url" : "http://www.msstate.edu/"
        },
        {
            "name" : "Mississippi State University",
            "location" : "Starkville, MS",
            "degree" : "BS",
            "major" : "Electrical Engineering",
            "minor" : ["Computer Science", "Mathematics"],
            "graduation" : "September 2018",
            "url" : "http://www.uopeople.edu/"
        }
    ] ,
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Sample Project 1",
            "dates" : "2016",
            "description" : "I really should put a description here",
            "images" : [
                "images/SpacePlaceHolder_Project1.jpg"
            ]
        },
        {
            "title" : "Sample Project 2",
            "dates" : "2016",
            "description" : "I really should put a description here",
            "images" : [
                "images/SpacePlaceHolder_Project2.jpg"
            ]
        }
    ]
};

projects.display = function () {

    for (var i in projects.projects)
    {
        console.log(i);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

        for (var j in projects.projects[i].images)
        {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
}

projects.display();

if (bio.name.length > 0)
{
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formattedPic);
}

if (bio.skills.length > 0)
{
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills)
    {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

function displaywork()
{
    for (i in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDate);

        var formattedDes = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDes);
    }
}

displaywork();

$(document).click(function(loc)
{
    logClicks(loc.pageX, loc.pageY);
}
);

$("#main").append(internationalizeButton);

function inName( oldname )
{
    var names = oldname.trim().split(" ");
    var first = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    var last = names[1].toUpperCase();

    return first + " " + last;
}
