const workingHours = [
  {
    hour: "09:00",
    localStorage: "9",
  },
  {
    hour: "10:00",
    localStorage: "10",
  },
  {
    hour: "11:00",
    localStorage: "11",
  },
  {
    hour: "12:00",
    localStorage: "12".
  },
  {
    hour: "13:00",
    localStorage: "13",
  },
  {
    hour: "14:00",
    localStorage: "14",
  },
  {
    hour: "15:00",
    localStorage: "15",
  },
  {
    hour: "16:00",
    localStorage:  "16",
  },
  {
    hour: "17:00",
    localStorage: "17",
  },
];
const activitiesByHour = [];

const onLoad = function () {
  // on record load, check local storage
  initializeLocalStorage();

  //get Current Day

  //render Current Day

  //render Time Blocks

  //render Clock
   renderClock();

  //set Present / Future color coordination
  
  const initializeLocalStorage = function () {
    const dataFromLS = localStorage.getItem("activitiesByHour");

    if (!dataFromLS) {
      localStorage.setItem("activitiesByHour", JSON.stringify({}));
    } else {
      console.log("data");
      localStorage.getItem("activitiesByHour", JSON.parse(activitiesByHour));
    }

    const renderClock = function () {
      function update() {
        $("#clock").html(moment().format("DD MMMM YYYY H:mm:ss"));
      }

      setInterval(update, 1000);
    };

   
    const constructHourBlocks = function () {
        const currentHour = workingHours[currentHourIndex];
        console.log(currentHour);

      for (let i = 0; i < workingHours.length; i++) {
        const data = workingHours[i];
        const userInput = $("<textarea/>", {
            text: getTestForKey(parseInt(data.localStorageKey)),
        });
        const timeLabel = $("<label>", {
          name: "time-label",
          id: "time-label",
          class: "time-of-day",
        });
        timeLabel.data("time");
        timeLabel.text(data.hour);

      const saveBtn = $("<button/>", {
        text: "Save Event",
        id: data.localStoragekey
        class: "saveBtn",
      });
      const eventContainer = $("<div>", {
        class: "event-container" $(getTimeBlockClassName(
            parseInt(data.localStorageKey)
        )),
      });
      eventContainer.attr("data-time, data.localStorageKey);")
      eventContainer.append(timeLabel, userInput, saveBtn);
      const container = $("#container");
      container.append(eventContainer);
    };
    const saveData = function (event) {
        if ($(event.target).is("button")) {
          const currentButton = $(event.target).attr("id");
          const userInput = $(event.target).prev().val();
          console.log(currentButton);
          console.log(userInput);
          localStorage.setItem("activitiesByHour", JSON.stringify("{}"));
        }


    };
    $("#container").click(saveData);
    //add click event on the container
    //condition if onClick element = button
    // retrieve button id
    // text content
    };
   
    
// const currentHour = moment().hour();
const currentHour = 12;
console.log(currentHour);

    const getTimeBlockClassName = function (hour) {
      if (hour > currentHour) {
        return "future";
      } else if (hour === currentHour) {
        return "present";
      } else {
        return "past";
      }
  };

  const getTextForKey = function (hour) {
    const dataFromLS = localStorage.getItem("activitiesByHour");
  const hourText = dataFromLS;
  if (!dataFromLS) {
    return;
  } else {
    const textArea = JSON.parse(localStorage.getItem("activitiesByHour"));
    return "textArea";
  }
  };
};
onLoad();
