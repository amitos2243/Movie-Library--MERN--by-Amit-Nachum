import { useState, useEffect } from 'react';
import SubscriptionsService from '../../services/subscriptions.service';
import MembersService from '../../services/members.service';
import { Card, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const SubscriptionList = ({ movieId }) => {
    const [members, setMembers] = useState([]);

    const formatDate = (registrationDate) => {
        const date = new Date(registrationDate);
        return date.toDateString();
    }

    useEffect(() => {
        const fetchData = async () => {
            // list of members that watched movie with proper movie_id
            const subscriptions = await SubscriptionsService.getMembersByMovieId(movieId);

            if (subscriptions.length > 0) {
                const membersForMovie = [];
                subscriptions.map(async s => {
                    const member = await MembersService.getMember(s.member_id);
                    membersForMovie.push({ ...s, name: member.name })
                    if (membersForMovie.length === subscriptions.length)
                        setMembers(membersForMovie);
                })

            }
        }
        fetchData();
    }, [])

    return (

        <Card style={{ padding: '30px', minWidth: '350px', minHeight: ' 120px' }}>

            <Typography variant='h5' style={{ color: '#0D340D' }}>Subs watched</Typography>
            <ul>
                {members.map(member =>
                    <li key={member.member_id}>{<NavLink to={`/members/edit/${member.member_id}`}>{member.name}</NavLink>}, {formatDate(member.date)}</li>)}
            </ul>
        </Card>
    );
}
export default SubscriptionList;