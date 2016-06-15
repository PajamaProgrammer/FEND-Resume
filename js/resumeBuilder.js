var bio = {
    "name" : "Rebecca Owen",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "1 (803) 237-3334",
        "email" : "rkowen@gmail.com",
        "github" : "PajamaProgrammer",
        "twitter" : "@PajamaProgramm1",
        "blog"  : "www.pajamaprogrammer.com",
        "location" : "Newberry, South Carolina"
    },
    "welcomeMessage" : "Hello World! I am a Computer Science Apprentance (studying to become a ninja) seeking interesting work and project opportunities.",
    "skills" : [
    "Python", "Java", "SQL", "HTML", "CSS", "Javascript", "C/C++"
    ],
    "picture" : "images/RKO_2016.jpg"
};

bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    var formattedContacts = [];

    formattedContacts.push(HTMLmobile.replace(/%data%/g, bio.contacts.mobile));
    formattedContacts.push(HTMLemail.replace(/%data%/g, bio.contacts.email));
    formattedContacts.push(HTMLgithub.replace(/%data%/g, bio.contacts.github));
    formattedContacts.push(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
    formattedContacts.push(HTMLblog.replace(/%data%/g, bio.contacts.blog));
    formattedContacts.push(HTMLlocation.replace(/%data%/g, bio.contacts.location));

    for (var i in formattedContacts)
    {
        if (formattedContacts[i].length > 0)
        {

            $("#topContacts").append(formattedContacts[i]);
            $("#footerContacts").append(formattedContacts[i]);
        }
    }

    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formattedPic);

    if (bio.skills.length > 0)
    {
        $("#header").append(HTMLskillsStart);

        for (i in bio.skills)
        {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}

bio.display();

var work = {
    "employers" :
    [
        {
            "employer" : "Schlumberger",
            "description" : "Supervised crew in the operation and ongoing maintenance of data acquisition equipment in a dynamic, fast paced, high volume, high expectation work setting. Provided mostly open-hole formation evaluation services - Resistivity, Nuclear (density/porosity), Imaging, Sonic, Nuclear Magnetic Resonance, Formation Pressure Testing & Sampling, Seismic, Coring, etc - and analysis of downhole conditions to aid clients on critical decisions regarding production or abandonment of well.",
            "jobs"  :
            [
                {
                    "position" : "Wireline Open-Hole Instructor",
                    "dates" : "Nov 2014 – Mar 2015",
                    "location" : "Kellyville, Oklahoma",
                    "bullets" :
                        [
                            "Invitation to be instructor for the next generation of wireline field engineers. This was an on-loan assignment while waiting for my next assignment in Malabo, Equatorial Guinea – unfortunately the O&G downturn has severely impacted the African market."
                        ]
                },
                {
                    "position" : "General Field Engineer",
                    "dates" : "Nov 2012 – Nov 2014",
                    "location" : "Pemba, Mozambique",
                    "bullets" :
                        [
                            "Trusted with high-profile projects throughout the entire EAR (East Africa Remotes) with rig spread rates exceeding $250,000 per day",
                            "Lead Project Engineer for Anadarko’s Land Campaign – successfully managed crew, equipment, and project with zero Non-Productive Time (NPT), safety, health, or environmental incidents.",
                            "Consistently praised for technical and coaching on performance appraisals",
                            "Actively worked towards implementing lean methodologies at the Pemba base – including a complete redesign of the shop floor layout to improve maintenance efficiency by eliminating waste and bottlenecks.",
                            "Applied engineering skills to re-build broken auto-trim machine (device that performs electrical integrity checks) and programming skills to completely update/create the software and required tool-specific scripts. Successfully brought the machine online so it could be implemented as part of the improved lean workflow."
                        ]
                },
                {
                    "position" : "General Field Engineer",
                    "dates" : "Jun 2011 – Nov 2012",
                    "location" : "Roma, Australia",
                    "bullets" :
                        [
                            "In charge of the seismic cell – managed crew, maintenance of equipment, and continuous training. Wrote the standard operating procedure (SOP) and several easy to follow tutorials. All seismic related projects were performed with a high-rate of success and zero NPT."
                        ]
                },
                {
                    "position" : "Senior to General Field Engineer",
                    "dates" : "Jun 2010 – Jun 2011",
                    "location" : "Diyarbakir, Turkey",
                    "bullets" :
                        [
                            "Promoted to highest grade level for field personnel",
                            "Wrote a technical training module for the TLD tool – the goal was to create a highly immersive learning module that would appeal to all types of learners (kinesthetic, visual, auditory, read-write). The module was still in use at Schlumberger’s training centers over three years later!",
                            "Also assigned as lead engineer for projects in Romania and Morocco"
                        ]
                },
                {
                    "position" : "Senior Field Engineer",
                    "dates" : "Jan 2010 – Jun 2010",
                    "location" : "Malabo, Equatorial Guinea",
                    "bullets" :
                        []
                },
                {
                    "position" : "Senior Field Engineer",
                    "dates" : "Apr 2009 – Dec 2009",
                    "location" : "Fahud, Oman",
                    "bullets" :
                        [
                            "Main engineer for Daleel Petroleum – The client was unsatisfied with current pretest (formation pressure testing) methods. In response, I wrote the standard operating procedure (SOP) and implemented the ‘SMART’ pretest feature (and subsequent how-to manual) specifically for Daleel. Implementation of the ‘SMART’ pretest feature helped save the Schlumberger from losing this contract."
                        ]
                },
                {
                    "position" : "Junior to Senior Field Engineer",
                    "dates" : "Aug 2006 – Mar 2009",
                    "location" : "Ras Shukier, Egypt",
                    "bullets" :
                        [
                            "In the top 10% of my segment by attaining fixed-step promotion from junior field engineer to senior field engineer within two years",
                            "Consistently performed as “exceeds expectation” on performance appraisals",
                            "Conducted the first world-wide alpha-phase test of newly developed data acquisition software (Maxwell with MDT – Modular Formation Dynamics Tester)"
                        ]
                }
            ]
        },
        {
            "employer" : "Mississippi Power, a Southern Company",
            "description" : "Worked as an Engineer in Training at Plant Jack Watson under the direct supervision of a senior engineer",
            "jobs"  :
            [
                {
                    "position" : "Cooperative Work Student",
                    "dates" : "Jan 2003 – May 2003",
                    "location" : "Gulfport, Mississippi",
                    "bullets" :
                        [
                            "Trusted with design and implementation of indicator lights to alert the operators of when the main turbine’s electrical output was synchronized to the electrical grid."
                        ]
                },
                {
                    "position" : "Cooperative Work Student",
                    "dates" : "May 2002 – Aug 2002",
                    "location" : "Gulfport, Mississippi",
                    "bullets" :
                        [
                            "Power Plant electrical drawing revisions using AutoCad.",
                            "Contractor coordination and completion of assigned work orders."
                        ]
                },
                {
                    "position" : "Cooperative Work Student",
                    "dates" : "Aug 2001 – Dec 2001",
                    "location" : "Gulfport, Mississippi",
                    "bullets" :
                        [
                            "Coal fineness and loss on ignition analysis/testing."
                        ]
                }
            ]
        }
    ]
}

work.display = function() {
    for (var i in work.employers)
    {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employers[i].employer);
        $(".work-entry:last").append(formattedEmployer);

        var formattedDes = HTMLworkDescription.replace("%data%", work.employers[i].description);
        $(".work-entry:last").append(formattedDes);

        for (var j in work.employers[i].jobs)
        {
            var formattedTitle = HTMLworkTitle.replace("%data%", work.employers[i].jobs[j].position);
            $(".work-entry:last").append(formattedTitle);

            //var formattedLoc = HTMLworkLocation.replace("%data%", work.employers[i].jobs[j].location);
            //$(".work-entry:last").append(formattedLoc);

            //var formattedDate = HTMLworkDates.replace("%data%", work.employers[i].jobs[j].dates);
            //$(".work-entry:last").append(formattedDate);

            var formattedLocDate = HTMLworkLocation.replace("%data%", work.employers[i].jobs[j].location +" : "+ work.employers[i].jobs[j].dates);
            $(".work-entry:last").append(formattedLocDate);

            $(".work-entry:last").append(HTMLworkBulletStart);
            for (var k in work.employers[i].jobs[j].bullets)
            {
                var formattedBullet = HTMLworkBullet.replace("%data%", work.employers[i].jobs[j].bullets[k]);
                $(".bullet-list:last").append(formattedBullet);
            }
        }
    }
}

work.display();

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

        var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLoc);

        var formattedDes = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDes);
    }
}


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

$("#mapDiv").append(googleMap);