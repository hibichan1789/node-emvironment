type Company = {
    id:number;
    name:string;
    location:Location;
}
type Location = {
    city:string;
    country:string;
}

function getCity(companies:Company[]):string[]{
    const uniqueCitySet =  new Set(companies.map(company => company.location.city));
    return [...uniqueCitySet]
}

const sampleCompanies: Company[] = [
    { id: 1, name: "Tech Corp", location: { city: "Tokyo", country: "Japan" } },
    { id: 2, name: "Data Inc", location: { city: "Osaka", country: "Japan" } },
    { id: 3, name: "Soft Bank", location: { city: "Tokyo", country: "Japan" } }
];

console.log(getCity(sampleCompanies));

/*
The Location type consists of two properties: city and country.
The Company type consists of three properties: id, name, and location.
The getCity function takes an array of objects based on the Company type.
It iterates through the array and extracts city property from each element and converts the element into the Set object to get unique element.
Finally, it returns an array of unique city names.
*/

/*
which is a nested object
to ensure unique values
*/