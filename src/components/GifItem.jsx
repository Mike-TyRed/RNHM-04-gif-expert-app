import PropTypes from "prop-types";

export const GifItem = ({title, url, id}) => {
    
  return (
  <div className="card">
    <p>{title}</p>
    <img src={url} alt={title} />
  </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired, // El titulo es requerido y debe ser un string
  url: PropTypes.string.isRequired, // La url es requerida y debe ser un string
};