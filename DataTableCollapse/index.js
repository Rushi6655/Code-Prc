$(document).ready(async function () {
  let rows = await fetchData("./onlycountrystates.json");
  $("#mytable").DataTable({
    data: rows,
    pageLength:2,
    columns: [
      {
        data: "cName",
      },
      {
        data: "sName",
      },
      {
        data: "",
        render: function (d) {
          return '<i class="fa-solid fa-plus expandState"></i>';
        },
      },
    ],
    language: {
      oPaginate: {
        sNext: '<i class="fa fa-forward"></i>',
        sPrevious: '<i class="fa fa-backward"></i>',
        sFirst: '<i class="fa fa-step-backward"></i>',
        sLast: '<i class="fa fa-step-forward"></i>'
      }
    },
  });
});

//fetch method to get data by url
async function fetchData(url) {
  let rows = [];
  await fetch(url)
    .then((r) => r.json())
    .then((r) => {
      rows = r;
    });
  return rows;
}

//  create the nested table ...
async function buildExpandTable(nesteddata) {
  let table =
    '<div class="expand"><table id="mytable" class="table">' +
    "<thead>" +
    "<tr>" +
    '<th scope="col">State</th>' +
    '<th scope="col">City</th>' +
    '<th scope="col">Action</th>' +
    "</tr>" +
    "</thead>" +
    "<tbody>";

  await nesteddata.cities.forEach((r) => {
    let tr = "<tr>";
    tr += "<td>" + nesteddata.sName + "</td>";
    tr += "<td>" + r.name + "</td>";
    tr += '<td><i class="fa-solid fa-plus expandCity"></i></td>';
    tr += "</tr>";
    table += tr;
  });
  table += "</tbody></table></div>";
  return table;
}
// create the second nested table
async function buildExpandTable1(nesteddata) {
  let table =
    '<div class="expand1"><table id="mytable1" class="table">' +
    "<thead>" +
    "<tr>" +
    '<th scope="col">State</th>' +
    '<th scope="col">City</th>' +
    "</tr>" +
    "</thead>" +
    "<tbody>";

  await nesteddata.cities.forEach((r) => {
    let tr = "<tr>";
    tr += "<td>" + nesteddata.sName + "</td>";
    tr += "<td>" + r.name + "</td>";
    tr += "</tr>";
    table += tr;
  });
  table += "</tbody></table></div>";
  return table;
}

$(document).on("click", ".expandState", async function () {
  debugger;
  if ($(this).hasClass("fa-plus")) {
    //clearing old expands...if exist. start
    $(".expand").remove();
    document.querySelectorAll(".expandState").forEach((ic) => {
      $(ic).removeClass("fa-minus").addClass("fa-plus");
    });
    // end

    $(this).removeClass("fa-plus").addClass("fa-minus");

    // fetch nested table data from backend..
    let state = await fetchData("./singlestate.json");
    // get nested table by passing data
    let exTable = await buildExpandTable(state);

    $(this).parent().parent().after(exTable);
    $(".expand").toggleClass("expand-active");
  } else {
    $(this).removeClass("fa-minus").addClass("fa-plus");
    $(".expand").remove();
  }
});

//nested expand
$(document).on("click", ".expandCity", async function () {
  if ($(this).hasClass("fa-plus")) {
    //clearing old expands...if exist. start
    $(".expand1").remove();
    document.querySelectorAll(".expandCity").forEach((ic) => {
      $(ic).removeClass("fa-minus").addClass("fa-plus");
    });
    // end

    $(this).removeClass("fa-plus").addClass("fa-minus");

    // fetch nested table data from backend..
    let state = await fetchData("./singlestate.json");
    // get nested table by passing data
    let exTable = await buildExpandTable1(state);

    $(this).parent().parent().after(exTable);
    $(".expand1").toggleClass("expand-active");
  } else {
    $(this).removeClass("fa-minus").addClass("fa-plus");
    $(".expand1").remove();
  }
});