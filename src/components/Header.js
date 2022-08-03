import React from "react";
let HackerLogo =
    "https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png";

const headerStyles = {
    color: "blue",
    backgroundColor: "#FF742B",
    display: 'flex'
};
const Header = (props) => {
    //destrucrtue props
    const { searchParam, category, date, setCategory, setSearchParam, setDate, handleSubmit } =
        props;

    const handleChange = (event) => {
        setSearchParam(event.target.value);
    };

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleDate = (event) => {
        setDate(event.target.value);
    };

    return (
        <div style={headerStyles}>
            <img src={HackerLogo} alt="hacker-logo" style={{ display: 'inline-block', width: "40px" }} />
            <form className="label" onSubmit={handleSubmit} style={{display:'flex', flexDirection:"column"}}>
                <label>
                    <input
                        placeholder="HACKATHON!!!"
                        type="text"
                        value={searchParam}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Submit" id="btn" />
                </label>
                <label className="label" htmlFor="articles" id="search-by">
                    Search By:{" "}
                    <select value={category} onChange={handleCategory} name="articles" id="articles">
                        <option value="story">Stories</option>
                        <option value="tag">Tag</option>
                        <option value="author">Author</option>
                        <option value="date">Date</option>
                    </select>
                    {category === "date" && <input type={"date"} value={date} onChange={handleDate} />}
                </label>
            </form>

        </div>
    );
};

export default Header;
