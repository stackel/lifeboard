import moment from "moment";
import React from "react";
import ListWithFetch from "../../base/list/ListWithFetch";

/* eslint-disable react/prop-types */
export default function Standings() {
  const currentMonth = moment().month();
  const isSeason = currentMonth >= 9 || currentMonth <= 2;
  if (!isSeason) {
    return null;
  }
  return (
    <ListWithFetch
      label="Bandy Elitserien"
      url="https://secret-thicket-04067.herokuapp.com/es"
      fetchInterval={1000 * 60 * 10}
      nItemsDisplay={6}
      noImages
      transformResponse={response => response.data.result.item}
      transformItem={item => ({
        title: `${item.position}. ${item.team}`,
        subtitle: `${item.points} poäng - ${item.round} spelade`
      })}
    />
  );
}
