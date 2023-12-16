export default function ProductBox({title,image}){
return(
    <div className="product-box">
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
)
}