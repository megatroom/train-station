import { useQuery } from '@apollo/client';
import { AdminLayout } from '../../layouts/AdminLayout';
import { Table } from '../../components/Table';
import { GET_ADMIN_ANALYTICS } from '../../services/admin.service';
import {
  Avatar,
  AvatarProps,
  Box,
  Button,
  Card,
  Heading,
} from '@radix-ui/themes';
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const { loading, error, data } = useQuery(GET_ADMIN_ANALYTICS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <AdminLayout>
      <Heading mb="6">Stations</Heading>
      <Card mb="8">
        <Table
          columns={[
            { name: 'id', label: '#ID', width: '80px' },
            { name: 'color', label: 'Color', width: '80px' },
            { name: 'title', label: 'Title' },
          ]}
          rows={
            data?.stations.map((station) => {
              return {
                cells: [
                  { value: station.id },
                  {
                    value: (
                      <Avatar
                        size="1"
                        radius="full"
                        fallback=" "
                        color={station.color as AvatarProps['color']}
                      />
                    ),
                  },
                  { value: station.title },
                ],
              };
            }) || []
          }
        />
      </Card>
      <Heading mb="6">Trips</Heading>
      <Card mb="8">
        <Table
          columns={[
            { name: 'originStationId', label: 'Origin #ID', width: '160px' },
            {
              name: 'destinationStationId',
              label: 'Destination #ID',
              width: '180px',
            },
            { name: 'price', label: 'Price' },
          ]}
          rows={
            data?.trips.map((trip) => {
              return {
                cells: [
                  { value: trip.originStationId },
                  { value: trip.destinationStationId },
                  { value: `$ ${trip.price}` },
                ],
              };
            }) || []
          }
        />
      </Card>
      <Box>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          <DoubleArrowLeftIcon /> Go back to home
        </Button>
      </Box>
    </AdminLayout>
  );
}
