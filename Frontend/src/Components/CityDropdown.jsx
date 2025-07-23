import React, { useState } from 'react';

const cityList = [
    "Welisara", "Weligama", "Wattegama", "Wattala", "Vavuniya", "Valvedditturai", "Vakarai", "Unawatuna",
    "Trincomalee", "Tangalle", "Talpe", "Talawakele", "Sigiriya", "Ratnapura", "Puttalam", "Polonnaruwa",
    "Point Pedro", "Pita Kotte", "Peliyagoda", "Panadura", "Nuwara Eliya", "Negombo", "Mulleriyawa",
    "Dehiwala-Mount Lavinia", "Moratuwa", "Monaragala", "Minuwangoda", "Mihintale", "Mawalgama", "Matara",
    "Matale", "Maharagama", "Kurunegala", "Kuliyapitiya", "Sri Jayewardenepura Kotte", "Kotikawatta", "Kolonnawa",
    "Koggala", "Kilinochchi", "Keppapularu", "Kelaniya", "Kegalle", "Katunayaka", "Kataragama", "Kandy", "Kandana",
    "Kalutara", "Kalmunai", "Kadugannawa", "Jaffna", "Ja Ela", "Horana South", "Homagama", "Hikkaduwa", "Hendala",
    "Hatton", "Haputale", "Hanwella Ihala", "Gampola", "Gampaha", "Galle", "Eravur Town", "Ella Town",
    "Devinuwara", "Dambulla", "Colombo", "Chilaw", "Bogahakumbura", "Beruwala", "Bentota", "Batticaloa",
    "Battaramulla South", "Badulla", "Anuradhapura", "Ampara", "Ambalangoda", "Horawala Junction",
    "Padaviya Divisional Secretariat", "Wellawaya", "Mirissa city"
];

const CityDropdown = ({ onCitySelect, error }) => {
    const [query, setQuery] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        const filtered = cityList.filter(city =>
            city.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(value ? filtered : []);
    };

    const handleSelect = (city) => {
        setQuery(city);
        onCitySelect(city);
        setFilteredCities([]);
    };

    return (
        <label htmlFor="city" className='label_style relative'>
            Located City
            <input
                type="text"
                id="city"
                value={query}
                onChange={handleInputChange}
                placeholder='Enter Your City'
                className='input_style'
            />
            {error.locatedCity && <p className="text-red-400 text-left text-xs mt-2 md:mt-1 absolute top-12 md:top-16">Located City is required</p>}
            {filteredCities.length > 0 && (
                <ul className="dropdown_style">
                    {filteredCities.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(city)}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </label>
    );
};

export default CityDropdown;