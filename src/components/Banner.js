const Banner = ({ banner }) => {
    return (
      <div>
        <img src={banner.bannerImage.node.sourceUrl} alt={banner.bannersTitle} />
        <h2>{banner.bannersTitle}</h2>
        <p>{banner.bannerDescription}</p>
        <a href={banner.bannerButton.url} target={banner.bannerButton.target}>
          {banner.bannerButton.title}
        </a>
      </div>
    );
  };
  
  export default Banner;