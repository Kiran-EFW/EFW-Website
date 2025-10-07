import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EFW Backend API is running' });
});

// API routes for EFW data
app.get('/api/projects', (req, res) => {
  // Mock data - will be replaced with real data later
  const projects = [
    {
      id: 1,
      name: 'Solar Farm Alpha',
      type: 'Solar',
      location: 'California, USA',
      capacity: '50 MW',
      status: 'Active',
      description: 'Large-scale solar energy project providing clean power to local communities.'
    },
    {
      id: 2,
      name: 'Wind Park Beta',
      type: 'Wind',
      location: 'Texas, USA',
      capacity: '75 MW',
      status: 'In Development',
      description: 'Offshore wind energy project harnessing coastal winds for sustainable energy.'
    }
  ];
  res.json(projects);
});

app.get('/api/efwt-info', (req, res) => {
  const efwtInfo = {
    name: 'Energy Future World Token',
    symbol: 'EFWT',
    blockchain: 'ERC-20',
    totalSupply: '1,000,000,000',
    currentPrice: '$0.05',
    marketCap: '$50,000,000'
  };
  res.json(efwtInfo);
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'All fields are required'
    });
  }

  // Create contact submission object
  const contactSubmission = {
    id: Date.now().toString(),
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
    ip: req.ip
  };

  // In a real application, you would save this to a database
  // For now, we'll just log it and return success
  console.log('New contact form submission:', contactSubmission);

  // You could also save to a file or send an email here
  // For demonstration, we'll just return success

  res.json({
    success: true,
    message: 'Thank you for your message. We will get back to you soon!',
    submissionId: contactSubmission.id
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`EFW Backend server is running on port ${PORT}`);
});

export default app;
