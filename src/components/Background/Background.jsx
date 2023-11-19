const Background = ({ yellowImg, blueImg }) => {
  return (
    <>
      <img
        style={{ position: 'absolute', top: 0, right: 0, zIndex: -1 }}
        src={yellowImg}
        alt=""
      />
      <img
        style={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1 }}
        src={blueImg}
        alt=""
      />
    </>
  );
};

export default Background;
