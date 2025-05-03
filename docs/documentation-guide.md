# Documentation Guide

## Documentation Structure

Our project documentation is split between two locations:

### Claude Project Knowledge
- **Person-focused documentation**
- Contains profiles that help maintain context between sessions
- Includes preferences, working styles, and collaboration notes

### GitHub Repository
- **Project and technical documentation**
- Stored in the `/docs` directory
- Version-controlled and easily updated
- Accessible from any device with GitHub access

## Documentation Files

### Claude Project
- **Daniel's Profile**: Working style, preferences, and project context
- **Claude's Profile**: Working capabilities and collaboration approach

### GitHub Repository
- **Project Roadmap**: High-level overview of project phases and status
- **Technical Reference**: Architecture, models, and implementation details
- **Working Agreement**: Collaboration workflow and responsibilities
- **Documentation Guide**: This file explaining our documentation approach

## Session Tracking

We use GitHub Issues to track our sessions:
- Each development session has a corresponding issue
- Issues document accomplishments, next steps, and open questions
- This creates a chronological history of our work

## Documentation Workflow

1. **Starting a Session**:
   - Daniel directs Claude to review relevant documentation:
     - Latest session issue
     - Project roadmap
     - Any specific documentation relevant to the day's tasks

2. **During Development**:
   - Focus on code and implementation
   - Reference documentation as needed

3. **Ending a Session**:
   - Create or update GitHub Issue with session notes
   - Update roadmap if significant progress was made
   - Commit any documentation changes

## Sensitive Information

- Sensitive information (like API keys, credentials) is never stored in GitHub
- Environment variables (.env files) are maintained locally and added to .gitignore
- Each development device maintains its own copy of sensitive files