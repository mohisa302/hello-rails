import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting, selectGreeting } from '../redux/greetingSlice';

const Greeting = () => {
    const greeting = useSelector(selectGreeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    return (
     <h1>{greeting}</h1>
    );
};

export default Greeting;
