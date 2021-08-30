import React, { useCallback } from 'react';
import './Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store';
import { TVShow } from '../../types/state';
import { RootState } from '../../types/rootState';

export const Table = () => {
  const dispatch = useDispatch();
  const { table, list } = useSelector<RootState>(state => state) as RootState;
  const onClick = useCallback((index) => {
    dispatch(removeItem(index));
  }, [dispatch]);

  if (!table.data.length) {
    return null;
  }
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__cell">Name</th>
          <th className="table__cell">Score</th>
        </tr>
      </thead>
      <tbody>
        {table.data.map((item, index) => {
          const row = (list.tvShows as TVShow[]).find((tvShow: TVShow) => tvShow.show.id === item.id);
          if (row) {
            return (
              <tr key={`${item.id}_${row.score}`} className="table__row" onClick={() => onClick(index)}>
                <td className="table__cell">{row.show.name}</td>
                <td className="table__cell">{row.score}</td>
              </tr>
            )
          }
          return null;
        })}
      </tbody>
    </table>
  )
}