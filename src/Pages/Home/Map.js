import React, { useEffect } from "react";
import "./Product.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoicm9odWw0IiwiYSI6ImNreGFsdm9uMDJucmczMHBtZzFjaGRtancifQ.w2hBY2IHOCqwdXBSvigecQ";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [90.12145, 23.61425], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return (
    <>
      <h3 className="text-center mt-5 mb-5 text-success">Location</h3>
      <div id="map"></div>;
    </>
  );
};

export default Map;
