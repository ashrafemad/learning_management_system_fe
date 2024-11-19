import { useState, useEffect, useRef } from "react";

function CoursesData() {
    const [courses, setCoursesData] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true; // Set flag to true after first call
            fetchCoursesData('/api/courses/');
        }
    }, []);

    const fetchCoursesData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setCoursesData((prevItems) => [...prevItems, ...data.results]);
            setNextPage(data.next);
        } catch (err) {
            console.log(err)
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => {
        if (nextPage) {
            fetchCoursesData(nextPage);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {courses}</p>;
    }

    return (
        <div className="container">
            <div className="course-details">
                <div className="courses-list-section">
                    {
                        Object.values(courses).map((course, index) => (
                            <div className="course-row" key={index}>
                                <div className="course-row-details">
                                    <h3>{course.title}</h3>
                                    {course.lessons?.length > 0 ? (
                                        <h5>Including: </h5>
                                    ) : (
                                        <h5>No lessons available yet!</h5>
                                    )}
                                    {
                                        course.lessons?.map((lesson, index) => (
                                            <p key={index}>{lesson.title} - {lesson.duration} min</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="load-more-button">
                    {nextPage && <button onClick={loadMore}>Load More</button>}
                </div>
            </div>
        </div>
    );
};

export default CoursesData;