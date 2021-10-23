const onLoad = function () {
  // on record load, check local storage
  checkLocalStorage();

  //get Current Day

  //render Current Day

  //render Time Blocks

  //render Clock
  renderClock();

  //render Hour Block
  renderHourBlocks();

  //set Present / Future color coordination
  isPresent();
};

const checkLocalStorage = function () {
  // function to check if anything is in local storage
  // if so, return data
  // if not, set default value
};

const renderClock = function () {
  // function to render current day and time
};

const renderHourBlocks = function () {
  // render hour blocks
};

const isPresent = function () {
  // if present - set color to --aquamarine
  // if false - set color to --blue-violet
  // if future - set color to --azure
};
