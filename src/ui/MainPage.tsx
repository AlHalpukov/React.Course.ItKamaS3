import TrackDetail from "./TrackDetail/TrackDetail";
import TrackList from "./TrackList";
import PageTitle from "./PageTitle";
import { useTrackSelection } from "../bll/useTrackSelection";

function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

  const handleTrackSelect = (id: string | null) => {
    setTrackId(id);
  };
  return (
    <>
      {/* <Header />
      <SidebarMenu />
      */}
      <PageTitle />
      <div style={{ display: "flex", gap: "40px" }}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetail trackId={trackId} />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default MainPage;
