# Workflow

> Solo dev + AI-as-team. AI = subagents, mỗi feature chạy trong worktree riêng.

## Branching

| Branch | Mục đích |
|--------|---------|
| `main` | Always deployable. Squash merge từ feature branches. |
| `feature/<name>` | Một feature = một branch. Ví dụ: `feature/hero-cta`, `feature/work-grid` |

## Commits — Conventional Commits

```
<type>(<scope>): <description>

<body optional>
```

| Type | Use |
|------|-----|
| `feat` | New feature |
| `fix` | Bug fix |
| `style` | CSS / visual changes (không logic) |
| `refactor` | Code restructuring, no behavior change |
| `docs` | Documentation only |
| `chore` | Build, config, deps, gitignore |

**Ví dụ:**
- `feat(hero): add primary CTA button`
- `style(work): adjust card spacing per design system`
- `fix(mobile): prevent nav menu background bleed`

## Subagent pattern (worktree per feature)

```bash
# Khởi tạo worktree
git worktree add ../demo-<feature> -b feature/<name>

# Subagent làm việc trong ../demo-<feature>/
# Commits, push branch
cd ../demo-<feature>
git push -u origin feature/<name>

# Xong việc → báo ready-for-review
```

Mỗi subagent có isolation hoàn toàn, không đụng main worktree.

## Quality gate (BẮT BUỘC trước merge)

1. **Browser smoke test** — load page, no console error, sections render đúng
2. **Responsive check** — 375px (mobile) + 768px (tablet) + 1280px (desktop)
3. **Lighthouse** — score ≥ 90 (perf, a11y, SEO, best practices)
4. **User review** — bạn duyệt trước khi merge

## Merge strategy — Squash merge

```bash
git checkout main
git merge --squash feature/<name>
git commit -m "feat: <description>"
```

Một commit = một feature. History sạch, revert dễ.

## Issue-driven dispatch

1. Bạn tạo GitHub Issue mô tả feature (dùng template `.github/ISSUE_TEMPLATE/feature.md`)
2. AI check `gh issue list --label ready` mỗi session start
3. AI pick issue tiếp theo, tạo worktree + branch
4. Subagent implement, chạy quality gate, push branch
5. AI báo ready-for-review kèm PR link

## Daily ritual

### Sáng
- Bạn list features hôm nay trong chat
- AI tạo issues (nếu chưa có) + tạo worktrees
- AI recap trạng thái pending worktrees từ hôm qua

### Chiều/tối
- AI tóm tắt commits + branches pushed trong ngày
- List branches chờ review
- Bạn duyệt, squash merge, close issues

### Session start (auto)
- HUD hiển thị số worktrees active, branches chờ review
- Nhắc nếu có branch stale >24h không update

## Conflict resolution

- Worktree isolation → không conflict trong quá trình làm
- Trước merge: AI rebase feature branch lên main hiện tại
- Nếu conflict: subagent resolve, bạn re-review

## Local commands cheat-sheet

```bash
# List worktrees
git worktree list

# Clean worktree sau khi merge
git worktree remove ../demo-<feature>
git branch -d feature/<name>

# Check branches chờ review
gh pr list --state open

# Squash merge via PR
gh pr merge --squash --delete-branch
```
