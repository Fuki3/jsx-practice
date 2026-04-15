import { devices } from "../data/data.js";

const Exercise2 = () => {
  const devicesWithMinSize700 = devices.filter((device) => device.width >= 700);
  return (
    <ul>
      {devicesWithMinSize700.map((device) => (
        <li key={device.id}>{device.name}</li>
      ))}
    </ul>
  );
};

export default Exercise2;
