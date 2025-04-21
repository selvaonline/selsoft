"use client";

import React from 'react';

interface Location {
  name: string;
  address: string;
  mapUrl: string;
}

const OfficeLocationsMap: React.FC = () => {
  // Office locations data with direct map URLs for each location
  const locations: Location[] = [
    {
      name: 'Headquarters',
      address: '303, S Jupiter, Suite 110, Allen, TX 75002, USA',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.9456613965823!2d-96.67483372426308!3d33.10272827352006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c177ba76022a9%3A0x82baa49d8d2dfca4!2s303%20S%20Jupiter%20Rd%20%23110%2C%20Allen%2C%20TX%2075002%2C%20USA!5e0!3m2!1sen!2sin!4v1716848203125!5m2!1sen!2sin'
    },
    {
      name: 'Canada Office',
      address: 'Selsoft Canada Inc. 80 Atlantic Ave, 4th Floor, Toronto, ON M6K 1X9',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2698286043983!2d-79.42775542392778!3d43.63746997110893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35064439bc1d%3A0x14abb5f7263a34e0!2s80%20Atlantic%20Ave%204th%20floor%2C%20Toronto%2C%20ON%20M6K%201X9%2C%20Canada!5e0!3m2!1sen!2sin!4v1716850600000!5m2!1sen!2sin'
    },
    {
      name: 'India Office',
      address: 'Prince info park, No.81B, Tower A, 3rd floor, \nAmbattur Industrial Estate, Ambattur, Chennai-58\nIndia',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1299237996224!2d80.16131592383498!3d13.09872989078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611a6e2d0b33%3A0x6d7bfb8cb55d478e!2sPrince%20Infopark%2C%20Ambattur%20Industrial%20Estate%2C%20Chennai%2C%20Tamil%20Nadu%20600058!5e0!3m2!1sen!2sin!4v1716850650000!5m2!1sen!2sin'
    }
  ];

  const [activeLocation, setActiveLocation] = React.useState<number>(0);

  return (
    <div className="office-locations-map">
      <div className="location-tabs mb-3">
        {locations.map((location, index) => (
          <button 
            key={index}
            className={`btn ${activeLocation === index ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
            onClick={() => setActiveLocation(index)}
          >
            {location.name}
          </button>
        ))}
      </div>
      
      <iframe
        src={locations[activeLocation].mapUrl}
        style={{ height: '400px', width: '100%', border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Selsoft ${locations[activeLocation].name}`}
      />
      
      <div className="mt-2">
        <p className="mb-0"><strong>{locations[activeLocation].name}:</strong> {locations[activeLocation].address}</p>
      </div>
    </div>
  );
};

export default OfficeLocationsMap;
