import React from "react";
import {
	Typography,
	Container,
	Grid,
	Card,
	CardContent,
	Button,
	Box,
	Chip,
} from "@mui/material";
import { ArrowForward, Add } from "@mui/icons-material";
import Link from "next/link";
import Logo from "@/components/Logo";
import fetchAPIFromBackendSingleWithErrorHandling, { fetchAPIFromBackendListWithErrorHandling } from "@/server";
import { Project } from "@/types/project";
import SettingsIcon from '@mui/icons-material/Settings';
import { Campaign } from "@/types";
import fetchSession from "@/server/session";
import Image from "next/image";



const campaignNameColor = "#000000"; // Black color for Campaign Name
type DashboardProps = {
	params: Promise<
		{ projectId: string }
	>
}

const Dashboard = async ({ params }: DashboardProps) => {
	const { projectId } = await params;
	const session = await fetchSession();
	if (!session) {
		return <div>Not logged in</div>
	}
	const canAccessOtherProject = (session.permission & session.permissionMap.PermissionOtherProjectAccess) === session.permissionMap.PermissionOtherProjectAccess;
	if (!canAccessOtherProject && session.projectId !== projectId) {
		return <div>Not allowed to access this project</div>
	}
	const myProjectResponse = await fetchAPIFromBackendSingleWithErrorHandling<Project>(`/project/${projectId}?includeProjectLeads=true`);
	if (!myProjectResponse) {
		return <div>Failed to fetch your project</div>
	}
	if ('detail' in myProjectResponse) {
		return <div>{myProjectResponse.detail}</div>
	}
	const project = myProjectResponse.data;
	const projectLeads = project.projectLeads || [];
	const campaignListResponse = await fetchAPIFromBackendListWithErrorHandling<Campaign>(`/campaign/?projectId=${projectId}`);
	if (!campaignListResponse) {
		return <div>Failed to fetch campaigns</div>
	}
	if ('detail' in campaignListResponse) {
		return <div>{campaignListResponse.detail}</div>
	}
	const campaigns = campaignListResponse.data;
	return (<div style={{ display: "flex", backgroundColor: "white", minHeight: "100vh" }}>
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				p: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Logo />
			<Container
				sx={{
					my: 1,
					textAlign: "center",
					bgcolor: "#006699",
					p: 2,
					borderRadius: 3,
					boxShadow: 3,
					transition: "0.3s",
					"&:hover": { boxShadow: 6 },
					display: 'block'
				}}
				component='div'
			>
				<Image
					src={project.logoUrl}
					alt={project.name}
					width={100}
					height={100}
					unoptimized={true}
					style={{ 'display': 'block', 'margin': 'auto' }}
				/>
				<Typography
					variant="h4"
					fontWeight="bold"
					sx={{
						fontFamily: "Lora, serif",
						color: "#fff",
					}}
				>
					Welcome to {project.name}
				</Typography>
				<Link href={`/project/${projectId}/edit`}>
					<Button
						variant="outlined"
						sx={{
							mt: 1,
							borderColor: "white",
							color: "#006699",
							bgcolor: "white",
							borderRadius: 30,
							transition: "0.3s",
							"&:hover": {
								bgcolor: "#006699",
								color: "#fff",
								transform: "scale(1.05)",
							},
						}}
						endIcon={<SettingsIcon />}
					>
						Settings
					</Button>
				</Link>
				<br />
				{projectLeads.map((lead) => (
					<Chip label={lead} sx={{
						mt: 2,
						borderColor: "white",
						bgcolor: "white",
						borderRadius: 30,
						transition: "0.3s",
					}} key={lead} />
				))}
			</Container>

			{/* Active Campaigns */}
			<Container>
				<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
					<Typography
						variant="h5"
						sx={{ fontWeight: "bold", fontFamily: "Lora, serif", color: "#006699" }}
					>
						Active Campaigns
					</Typography>
					<Link href={`/project/${projectId}/new`}>
						<Button
							variant="contained"
							sx={{ bgcolor: "#006699", color: "#fff", borderRadius: 30 }}
							startIcon={<Add />}
						>
							Create Campaign
						</Button>
					</Link>
				</Box>
				<Grid container spacing={3}>
					{
						campaigns.length === 0 &&
						<Typography
							variant="h5"
							sx={{ fontWeight: "bold", fontFamily: "Lora, serif", color: "#006699" }}
						>
							No Active Campaigns
						</Typography>
					}
					{campaigns.map((campaign) => (
						<Grid item xs={12} sm={6} md={4} key={campaign.campaignId}>
							<Card
								sx={{
									borderRadius: 3,
									boxShadow: 3,
									transition: "0.3s",
									"&:hover": { boxShadow: 6, transform: "scale(1.05)" },
								}}
							>
								<CardContent sx={{ textAlign: "center" }}>
									<Typography
										variant="h6"
										fontWeight="bold"
										sx={{ fontFamily: "Lora, serif", color: campaignNameColor }}
									>
										{campaign.name}
									</Typography>
									<Typography variant="body2" color="gray">
										Date: {new Date(campaign.startDate).toUTCString()} -{" "}
										{new Date(campaign.endDate).toUTCString()}
									</Typography>
									<Link href={`/campaign/${campaign.campaignId}`}>
										<Button
											variant="outlined"
											sx={{
												mt: 1,
												borderColor: "#006699",
												color: "#006699",
												borderRadius: 30,
												transition: "0.3s",
												"&:hover": {
													bgcolor: "#006699",
													color: "#fff",
													transform: "scale(1.05)",
												},
											}}
											endIcon={<ArrowForward />}
										>
											Go to Campaign
										</Button>
									</Link>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	</div>
	);
};

export default Dashboard;
