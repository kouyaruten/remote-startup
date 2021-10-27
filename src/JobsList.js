import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import JobCard from './JobCard'
import { useSelector, useDispatch } from 'react-redux';
import {
    add, cancel, selectCount, toggle, clear
} from './features/counter/counterSlice';

function JobsList({ jobs }) {
    const filters = useSelector(selectCount);

    return (
        <div>
            <Filter />
            {


                jobs.filter(job => filters.every(elem => job.fields.tags.includes(elem))).map((job, i) => <JobCard job={job.fields} key={job.id} />)

            }
        </div>
    )
}

export default JobsList
