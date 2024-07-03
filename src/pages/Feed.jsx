import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const fetchPhotos = async () => {
  // Replace with actual API call
  return [
    {
      id: 1,
      title: "Sunset",
      description: "Beautiful sunset over the mountains.",
      username: "john_doe",
      url: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Beach",
      description: "Relaxing day at the beach.",
      username: "jane_doe",
      url: "https://via.placeholder.com/300",
    },
  ];
};

const Feed = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading photos</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((photo) => (
        <Card key={photo.id}>
          <img src={photo.url} alt={photo.title} className="w-full h-64 object-cover" />
          <CardHeader>
            <CardTitle>{photo.title}</CardTitle>
            <CardDescription>{photo.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Uploaded by {photo.username}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Feed;