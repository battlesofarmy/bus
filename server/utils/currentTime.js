// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   const dhakaTime = new Date().toLocaleString("en-US", {
//     timeZone: "Asia/Dhaka",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     weekday: "short",
//     hour12: false,
//   });

//   const date = new Date();

//   const options = { timeZone: "Asia/Dhaka" };
//   const hour = date.toLocaleString("en-US", { ...options, hour: "2-digit", hour12: false });
//   const minute = date.toLocaleString("en-US", { ...options, minute: "2-digit" });
//   const second = date.toLocaleString("en-US", { ...options, second: "2-digit" });
//   const weekday = date.toLocaleString("en-US", { ...options, weekday: "short" });

//   res.json({
//     hour,
//     minute,
//     second,
//     weekday
//   });
// });

// module.exports =  router;





const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const date = new Date();
  const options = { timeZone: "Asia/Dhaka" };

  const hour = new Intl.DateTimeFormat("en-US", { ...options, hour: "2-digit", hour12: false }).format(date);
  const minute = new Intl.DateTimeFormat("en-US", { ...options, minute: "2-digit" }).format(date);
  const second = new Intl.DateTimeFormat("en-US", { ...options, second: "2-digit" }).format(date);
  const weekday = new Intl.DateTimeFormat("en-US", { ...options, weekday: "short" }).format(date);

  res.json({
    hour,
    minute,
    second,
    weekday
  });
});

module.exports = router;
