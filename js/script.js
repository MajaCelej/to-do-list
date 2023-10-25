{
    const tasks = [
        {
            content: "Skończyć kurs",
            done: false,
        },
        {
            content: "Pójść z psem na spacer",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li>
              ${task.content}
              </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}