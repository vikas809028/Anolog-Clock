function clock() {
  const d = new Date();
  const tz1 = {
    timeZone: "America/Los_Angeles",
  };
  let time1 = d.toLocaleTimeString("en-US", tz1);
  const myArray1 = time1.split(":");
  let h1 = parseInt(myArray1[0]);

  let m1 = parseInt(myArray1[1]);

  let s1 = myArray1[2];
  s1 = s1.substring(0, 3);
  let h_rotation1 = 30 * h1 + 0.5 * m1;
  let m_rotation1 = 6 * m1;
  let s_rotation1 = 6 * s1;
  hr1.style.transform = `rotate(${h_rotation1}deg)`;
  min1.style.transform = `rotate(${m_rotation1}deg)`;
  sec1.style.transform = `rotate(${s_rotation1}deg)`;
  digital1.innerHTML = `${time1}`;
  const tz2 = {
    timeZone: "Africa/Johannesburg",
  };
  let time2 = d.toLocaleTimeString("en-US", tz2);
  const myArray2 = time2.split(":");
  let h2 = parseInt(myArray2[0]);

  let m2 = parseInt(myArray2[1]);

  let s2 = myArray2[2];
  s2 = s2.substring(0, 3);
  let h_rotation2 = 30 * h2 + 0.5 * m2;
  let m_rotation2 = 6 * m2;
  let s_rotation2 = 6 * s2;
  hr2.style.transform = `rotate(${h_rotation2}deg)`;
  min2.style.transform = `rotate(${m_rotation2}deg)`;
  sec2.style.transform = `rotate(${s_rotation2}deg)`;
  digital2.innerHTML = `${time2}`;

  const tz3 = {
    timeZone: "Asia/Tokyo",
  };
  let time3 = d.toLocaleTimeString("en-US", tz3);
  const myArray3 = time3.split(":");
  let h3 = parseInt(myArray3[0]);

  let m3 = parseInt(myArray3[1]);

  let s3 = myArray3[2];
  s3 = s3.substring(0, 3);
  let h_rotation3 = 30 * h3 + 0.5 * m3;
  let m_rotation3 = 6 * m3;
  let s_rotation3 = 6 * s3;
  hr3.style.transform = `rotate(${h_rotation3}deg)`;
  min3.style.transform = `rotate(${m_rotation3}deg)`;
  sec3.style.transform = `rotate(${s_rotation3}deg)`;
  digital3.innerHTML = `${time3}`;

  const tz4 = {
    timeZone: "Asia/Dubai",
  };
  let time4 = d.toLocaleTimeString("en-US", tz4);
  const myArray4 = time4.split(":");
  let h4 = parseInt(myArray4[0]);

  let m4 = parseInt(myArray4[1]);

  let s4 = myArray4[2];
  s4 = s4.substring(0, 3);
  let h_rotation4 = 30 * h4 + 0.5 * m4;
  let m_rotation4 = 6 * m4;
  let s_rotation4 = 6 * s4;
  hr4.style.transform = `rotate(${h_rotation4}deg)`;
  min4.style.transform = `rotate(${m_rotation4}deg)`;
  sec4.style.transform = `rotate(${s_rotation4}deg)`;
  digital4.innerHTML = `${time4}`;
  const tz5 = {
    timeZone: "America/Mexico_City",
  };
  let time5 = d.toLocaleTimeString("en-US", tz5);
  const myArray5 = time5.split(":");
  let h5 = parseInt(myArray5[0]);

  let m5 = parseInt(myArray5[1]);

  let s5 = myArray5[2];
  s5 = s5.substring(0, 3);
  let h_rotation5 = 30 * h5 + 0.5 * m5;
  let m_rotation5 = 6 * m5;
  let s_rotation5 = 6 * s5;
  hr5.style.transform = `rotate(${h_rotation5}deg)`;
  min5.style.transform = `rotate(${m_rotation5}deg)`;
  sec5.style.transform = `rotate(${s_rotation5}deg)`;
  digital5.innerHTML = `${time5}`;
}
clock();
setInterval(clock, 1000);
