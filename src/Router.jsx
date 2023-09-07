import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Main } from "./components"
import MainLayout from "./layout/MainLayout/MainLayout"
import { VideoPage, SearchPage, ChannelPage } from "./pages"



function Router() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Main />} />
                    <Route path="search/:id" element={<SearchPage />} />
                    <Route path="video/:id" element={<VideoPage />} />
                    <Route path="channel/:id" element={<ChannelPage />}/>
                </Route>
            </Route>
        )
    )
    return (
        <RouterProvider router={routes} />
    )  
}

export default Router