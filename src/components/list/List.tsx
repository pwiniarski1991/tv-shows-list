import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../store';
import { Show } from '../../types/show';
import './List.css';

interface Props {
  items: { score: number, show: Show }[]
}

export const List: FC<Props> = ({ items }) => {
  const dispatch = useDispatch();
  const onClick = useCallback((id) => {
    dispatch(addItem(id));
  }, [dispatch]);
  return (
    <ul className="list">
      {items.map(item => (
        <li className="list__item" key={item.show.id} onClick={() => onClick(item.show.id)}>
          <span className="name">{item.show.name}</span>
          {`- ${item.score}`}
        </li>
      ))}
      {!items.length ? <div>Brak wyników</div> : null}
    </ul>
  )
}