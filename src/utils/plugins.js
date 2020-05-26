exports.imgDir = (img) => {
  return `${process.env.PUBLIC_URL}/${img}`;
};

exports.urlImage = (img) => {
  return `http://localhost:8000/s3_images/${img}`;
  // return `https://netflix-example.herokuapp.com/s3_images/${img}`;
};

exports.movieUrl = (id) => {
  let token = localStorage.getItem("authorization");
  return `http://localhost:8000/watch/movie/${id}/${token}`;
  // return `https://netflix-example.herokuapp.com/watch/movie/${id}/${token}`;
};
