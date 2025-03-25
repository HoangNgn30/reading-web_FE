const Item = ({ book }) => {
    return (
        <div>
            <div className="flexCenter bg-primary p-6 rounded-3xl overflow-hidden relative group">
                <img src={book.image} alt={book.name} className="shadow-xl shadow-slate-900/30 rounded-lg" />
            </div>
            <div>
                <div>
                    <h4 className="h4 line-clamp-1 !my-0">{book.name}</h4>
                </div>
                <div className="flexBetween pt-1">
                    <p className=" text-text1 font-bold capitalize">{book.category}</p>
                </div>
                <p className="text-text1 line-clamp-2 py-1">{book.description}</p>
            </div>
        </div>
    );
};

export default Item;
