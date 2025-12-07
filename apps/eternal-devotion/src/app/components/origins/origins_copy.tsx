const START_DATE_TIME = new Date('2023-05-29').getTime();
const MOVE_DATE_YEAR = new Date('2010-08-26').getFullYear();

const OriginsCopy = () => {
  const today = new Date();
  const daysSincePainting = Math.floor(
    (today.getTime() - START_DATE_TIME) / (1000 * 60 * 60 * 24)
  );
  const yearsSinceMoved = today.getFullYear() - MOVE_DATE_YEAR;

  return (
    <>
      <p>As a child I would sit in my closet with the door closed for hours.</p>
      <p>
        I started painting {daysSincePainting.toLocaleString()} days ago. My
        first paintings were not good. I am still routinely dissatisfied with
        them when they're finished, but once they sit in a drawer I find myself
        becoming more attached. Each is created with 1 (one) sharpie, liquid
        based watercolor, and pigment based watercolor.
      </p>
      <p>
        I've lived in Chicago for {yearsSinceMoved} years. I don't travel often.
        My face continually changes as I age. I develop websites for a living,
        so I made a website for this thing I do while I'm living.
      </p>
      <p>
        If you like the paintings, I'm happy for you. If you don't, some things
        are best left unsaid and I encourage you to find things that do bring
        you joy. I do not tattoo but I have only the utmost respect for those
        that do. I am grateful for mine, I can't believe I'm living.
      </p>
    </>
  );
};

export default OriginsCopy;
