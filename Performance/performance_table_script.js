
var exams =
[
    "Name",
    "Form 1 Term 2",
    "Form 1 Term 3",
    "Form 2 Term 2",
    "Form 2 Term 3",
    "Form 3 Term 2",
    "Form 3 Term 3",
    "Form 4 Term 1",
    "Form 4 Term 2",
    "KCSE"

]

    

var marks = 
[
    [67, 78, 71, 80, 75, 68, 87,76, 83.1],
    [71, 72, 60, 70, 65, 57, 61,81, 82.4],
    [56, 68, 76, 65, 59, 77, 58,87, 82.3],
    [65, 57, 77, 83, 67, 74, 78,76, 81.7],
    [61, 77, 82, 59, 63, 63, 67,78, 81.5],
    [57, 74, 86, 60, 56, 78, 70,79, 81.8],
    [78, 63, 74, 61, 78, 72, 73,81, 81.3],
    [65, 79, 75, 62, 69, 84, 59,83, 80.6],
    [69, 83, 79, 85, 84, 75, 79,81, 80],
    [70, 87, 58, 79, 82, 67, 80,75, 80],

    [71, 72, 60, 70, 65, 57, 61,81, 79.4],
    [67, 78, 71, 80, 75, 68, 87,76, 79.1],
    [65, 57, 77, 83, 67, 74, 78,76, 78.7],
    [70, 87, 58, 79, 82, 67, 80,75, 78.5],
    [78, 63, 74, 61, 78, 72, 73,81, 78.3],
    [61, 77, 82, 59, 63, 63, 67,78, 77.5],
    [56, 68, 76, 65, 59, 77, 58,87, 77.3],
    [65, 79, 75, 62, 69, 84, 59,83, 76.6],
    [70, 87, 58, 79, 82, 67, 80,75, 75],
    [57, 74, 86, 60, 56, 78, 70,79, 74.8]
]

var names =
[
    "John Kimangi",
    "Ben Odoyo",
    "Ken Kuria",
    "Brian Kariuki",
    "Wilson Musyoka",
    "Alex Kipchirchir",
    "Gibson Kimutai",
    "Raymond Kai",
    "Godfrey Kariuki",
    "Paul Ngei",

    "Andrew NGure",
    "Peter Kilonzo",
    "Benson Mutiso",
    "John Kebaso",
    "Paul Odinga",
    "Brian Otieno",
    "CalPeters Kipting'ei",
    "James Wamai",
    "Johnson Omondi",
    "Muhammed Musa"
]

function mytable()
{
    var htmlCode = "<table id=\"table1\" style=\"border:2px solid black;\">";
    htmlCode += "<caption style=\"text-align:left\"; > Performance Table </caption>";
    x=0;
    for (var rowNum = 1; rowNum <= 20; rowNum++) 
        {
        if(rowNum == 1)
        {
            htmlCode += "<tr>";
            htmlCode += "<th colspan=\"20\" style=\"border:2px solid black; text-align: center\">" + "TOP 20 STUDENTS PERFOMANCE OVER THE 4 YEARS" + "</th>";
            htmlCode += "</tr>";

            htmlCode += "<tr>";
            z=0;
            for (var colNum = 1; colNum <= 10; colNum++) 
            {
                htmlCode += "<th style=\"border:2px solid black;\">" + exams[z] + "</th>";
                z++;
            }
            
            htmlCode += "</tr>";
        }
        htmlCode += "<tr>";
        y = 0;
        for (var colNum = 1; colNum <= 10; colNum++) 
        {
            if(colNum == 1)
            {
                htmlCode += "<td style=\"width:35vw\">" + names[rowNum - 1] + "</td>";
                continue;
            }
            
            htmlCode += "<td>" + marks[x][y] + "</td>";
            y++;
        }
        x++;
        htmlCode += "</tr>";
        }
        htmlCode += "</table>";

        document.getElementById("table").innerHTML = htmlCode;            
}  
