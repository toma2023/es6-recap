/* 1) How will you access Sophia’s secondary school location?
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
const location = data.Sophia.study[1].secondary[1].location;
//console.log(location);*/
/*2) How will you get the output [Advanced - uses 2D matrix
    concept]
    a) level-2
    b) 72.8621
let data =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]
    const level2 = data[3]['pHeroCourses']['course-xyz'];
   // console.log(level2);
    const digit = data[3]['locationField']['en-US']['lon'];
    console.log(digit);
    3) How will you get the output
      a) abc
      b) xyz    
let activities = {
    activity1: [
        {
            name: "listen on spotify",
        song_list: {

                song_1: "abc",
                song_2: "bcd"
            },
            id: 1
        },
        {
            name: "listen music through bot",
            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
}
const abcOutput = activities.activity1[0].song_list.song_1;
//console.log(abcOutput);
const  xyzOutput =activities.activity1[1].song_list.song_2;
console.log(xyzOutput);
4) How will you display
  a) Petersburg
  b) Herry


let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
"building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}
const petersburg = students[2222].address['city'];
//console.log(petersburg);
const herry = students[3333].name;
console.log(herry);
5) How will you display
  a) programming er coddogosti
  b) VW
  c) Bangladesh
*/
//parini

    


/*
6) How will you display
 a) B
 b) D

const studentData = [
    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]
const b = studentData[0].details[1].gradingDetails[0];
//console.log(b);
const d = studentData[1].details[1].gradingDetails[0];
console.log(d);
7) How will you display
  a) habluder adda
  b) Beginner


let data = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
const habluderAdda = data.data[0].bookDetails.name;
console.log(habluderAdda);
const begginer =data.data[1].bookCategory;
console.log(begginer);


*/