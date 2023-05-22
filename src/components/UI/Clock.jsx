import { useState, useEffect } from "react";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const Clock = () => {
  let prevTime = formatAMPM(new Date());
  const [currentTime, setCurrentTime] = useState(formatAMPM(new Date()));

  useEffect(() => {
    setInterval(() => {
      const time = formatAMPM(new Date());
      if (prevTime != time) {
        setCurrentTime(time);
        prevTime = time;
      }
    }, 1000);
  }, []);

  return <p className="text-[13px] sm:text-[12px] pt-[1px]">{currentTime}</p>;
};

export default Clock;
