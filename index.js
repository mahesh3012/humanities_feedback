var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSmBH2hm1eyhau5wvmV5GqB-_0Jegs9TF7jjdQY5RwRHjpT3MoaK2nZzeoynFzhsxT8buVCiRIAoRHQ/pub?output=csv';

function init() {
    Papa.parse(publicSpreadsheetUrl, {
      download: true,
      header: true,
      complete: showInfo
    })
  }
  window.addEventListener('DOMContentLoaded', init)

  function showInfo(results) {
    var data = results.data
    var result = [];
    var count = 1;

    let table_body=''
    data.forEach(row => {
        if(row['Course_Code']!=''){
            row_data=`<tr>
        <td>${row['Course_Code']}</td>
        <td>${row['Course_Name']}</td>
        <td>${row['Instructor_Name']}</td>
        <td>${row['Description']}</td>
        <td>${row[' [Syllabus Difficulty]']}</td>
        <td>${row[' [Level of Grading (1- Easy Grading, 5- Hard Grading)]']}</td>
        <td>${row[" [Faculty's Teaching]"]}</td>
        <td>${row[' [ How important is it to attend the class]']}</td>
        <td>${row['Presentations']}</td>
        <td>${row['Assignments']}</td>
        <td>${row['Grade']}</td></tr>`

        table_body=table_body+row_data;
        }
    });

    document.getElementById('table_body').innerHTML=table_body;
}