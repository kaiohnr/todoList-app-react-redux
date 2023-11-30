import styles from './Navbar.module.css';

const Navbar = () => {
  let now = new Date();

  let isMorning = now.getHours() > 5 && now.getHours() <= 12;
  let isAfternoon = now.getHours() > 12 && now.getHours() <= 18;
  let isEvening = now.getHours() > 18 && now.getHours() <= 22;
  let isNight = now.getHours() > 22 || now.getHours() <= 5;

  const times = {
    Morning: isMorning,
    Afternoon: isAfternoon,
    Evening: isEvening,
    Night: isNight,
  };

  const keysInObj = Object.keys(times);

  const getCurrentTime = keysInObj.filter(function (key) {
    return times[key];
  });

  return (
    <div className={styles['navbar-container']}>
      <h1>
        Good {getCurrentTime[0]}, Unknown User. <br />
        What about write a new todo?
      </h1>
    </div>
  );
};

export default Navbar;
