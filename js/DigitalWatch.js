// to get time with 0

// let m1 = m.toString();
// let s1 = s.toString();
// if (m1.length == 1) {
//   m1 = 0 + m1;
// }
// if (s1.length == 1) {
//   s1 = 0 + s1;
// }
// digital.innerHTML = `${h} : ${m1} : ${s1}`;

function clock() {
  const d = new Date();
  const tz1 = {
    timeZone: "America/Los_Angeles",
  };
  const tz2 = {
    timeZone: "Africa/Johannesburg",
  };
  const tz3 = {
    timeZone: "Asia/Tokyo",
  };
  const tz4 = {
    timeZone: "Asia/Dubai",
  };
  const tz5 = {
    timeZone: "America/Mexico_City",
  };
  let time1 = d.toLocaleTimeString("en-US", tz1);
  let time2 = d.toLocaleTimeString("en-US", tz2);
  let time3 = d.toLocaleTimeString("en-US", tz3);
  let time4 = d.toLocaleTimeString("en-US", tz4);
  let time5 = d.toLocaleTimeString("en-US", tz5);
  watch1.innerHTML = `${time1}`;
  watch2.innerHTML = `${time2}`;
  watch3.innerHTML = `${time3}`;
  watch4.innerHTML = `${time4}`;
  watch5.innerHTML = `${time5}`;
}
clock();
setInterval(clock, 1000);
