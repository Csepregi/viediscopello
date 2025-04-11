import type { LoaderFunctionArgs } from 'react-router';
import { db } from '../../utils/db.server'

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // Simple DB check
    await db.user.count();
    
    return new Response('OK', {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (err: unknown) {
    console.log('Healthcheck Error:', { err })
    return new Response('Error', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}
