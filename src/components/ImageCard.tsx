interface ImageCardProps {
    name?: string;
    size?: string;
    uploadDate?: string;
    src?: string;
}

const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
    return (
        <div className="card relative bg-slate-200 rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
            <img src={props.src} alt={props.name} className="h-56 w-full object-cover rounded-t-md" />
            <div className="card-body p-4">
                <h5 className="text-xl font-semibold mb-2 text-gray-600">{props.name}</h5>
                <p className="text-gray-600">Tamanho: {props.size}</p>
                <p className="text-gray-600">Data de Upload: {props.uploadDate}</p>
            </div>
        </div>
    )
}

export default ImageCard;