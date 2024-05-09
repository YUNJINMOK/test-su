import React from "react";

export default function Hours({ date1, date2, date3, time1, time2, time3 }) {
  return (
    <>
      <div className="intro-timetable">
        <div className="timetable-title">
          <p>기간</p>
          <p>시간</p>
        </div>
        <div className="timetable-column">
          <p>{date1}</p>
          <p>{time1}</p>
        </div>
        <div className="timetable-column">
          <p>{date2}</p>
          <p>{time2}</p>
        </div>
        {date3 && time3 && (
          <div className="timetable-column">
            <p>{date3}</p>
            <p>{time3}</p>
          </div>
        )}
      </div>
    </>
  );
}
