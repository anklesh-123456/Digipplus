import React from 'react';
import {Link} from 'react-router-dom';
import "./MyJoblinkStyle.css";
const Myjobslinks = () => {
  return (
    <>
  
    <div className='job-heading'>

    <div className="jobs">
<h3>JOBS</h3>
<li>
<Link  className="job-links" to="/solution">
Solution Writing
</Link>
</li>
<h3>FOR JOB APPLICATION</h3>
<li>
<Link  className="job-links" to="/screening">
SCREENING TASKS
</Link>
</li>
<h3>APPLICATION STATUS</h3>
<li>
<Link  className="job-links" to="/application">
JOB APPLICATION STATUS
</Link>
</li>
    </div>
    </div>
    </>
  );
};

export default Myjobslinks;