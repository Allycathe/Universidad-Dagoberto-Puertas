import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql= neon('postgresql://neondb_owner:iBES9KmkAZ2N@ep-fragrant-meadow-a8fa4vvx.eastus2.azure.neon.tech/neondb?sslmode=require');

export default sql;
