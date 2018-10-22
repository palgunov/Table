window.addEventListener("load", function () {
    "use strict";

    // let usersContainer = document.querySelector("#users");
    // let example = document.querySelector("#example");
    let example2 = document.querySelector("#example-div");


    // let users = new InteractiveTable({
    //     tableClass: "table table-bordered table-hover"
    //     // interactiveTableId: "table"
    // });
    //
    // users.addHeadingsRow("Имя", "Возраст", "Email");
    //
    // users.addRow("Иван", 39, "ivan@yandex.ru");
    // users.addRow("Светлана", 19, "svetko@mail.ru");
    // users.addRow("Наталья", 23, "nataly@gmail.com");
    //
    // usersContainer.innerHTML = users.generate();
    // users.addRowFromPage(usersContainer);

    // ----------------------------------------------------------------------------

    // let table2 = new Table();
    //
    // table2.addHeadingsRow("Простая", "Таблица");
    //
    // table2.addRow("Какой-то текст", 234234234);
    // table2.addRow("Еще что-нибудь", 898989);
    // table2.addRow("И напоследок", 346587);
    //
    // example.innerHTML = table2.generate();
    // table2.addRowFromPage();

    // ----------------------------------------------------------------------------

    let table3 = new InteractiveTable({
        openTableTag: '<div class="card card-default"><div class="card-body">',
        closeTableTag: '</div></div>',
        openRowTag: '<div class="d-flex">',
        closeRowTag: '</div>',
        openCellTag: '<div class="cell">',
        closeCellTag: '</div>',
        openHeadingTag: '<div class="cell cell--heading">',
        closeHeadingTag: '</div>',
        interactiveTableId: "table3"


    });


    table3.addHeadingsRow("Имя", "Возраст", "Email");

    // table3.addRow("Иван", 39, "ivan@yandex.ru");
    // table3.addRow("Светлана", 19, "svetko@mail.ru");
    // table3.addRow("Наталья", 23, "nataly@gmail.com");


    example2.innerHTML = table3.generate();
    table3.addRowFromPage(example2);


});